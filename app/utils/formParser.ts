import { FormEvent } from "react";

class FormParser<D> {
  private form?: any;
  private formData = new FormData();
  private formObject: Record<string, any> = {};
  private correctInputs =
    typeof window !== "undefined"
      ? [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement]
      : [];

  private isTypeInput(elem: HTMLInputElement) {
    return this.correctInputs.some((e) => elem instanceof e) && elem.name;
  }

  private getKeyAndValue(elem: HTMLInputElement | HTMLTextAreaElement) {
    if (
      elem instanceof HTMLInputElement &&
      elem.type === "file" &&
      elem.files
    ) {
      const files: Blob[] = [];
      if (elem.files && elem.files.length > 1) {
        for (const file of elem?.files as any) {
          files.push(file);
        }
        return [elem.name, files] as [string, Blob[]];
      } else return [elem.name, elem.files[0]] as [string, Blob];
    } else if (elem.type !== "submit")
      return [elem.name, elem.value] as [string, string];
  }

  private extractLabel(label: HTMLLabelElement) {
    return Array.from(label.children).find(
      (e) => e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
    ) as HTMLInputElement;
  }

  private extractFieldSet(fieldset: HTMLFieldSetElement) {
    const object: Record<string, any> = {};
    object[fieldset.name] = {};
    const labels = (Array.from(fieldset.children) as HTMLLabelElement[]).filter(
      (e) => e instanceof HTMLLabelElement
    );
    const inputs = (
      Array.from(fieldset.children) as (
        | HTMLInputElement
        | HTMLTextAreaElement
      )[]
    ).filter(
      (e) => e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
    );
    inputs.forEach((e) => {
      const result = this.getKeyAndValue(e);
      if (result) {
        object[fieldset.name][result[0]] = result[1];
        // if (Array.isArray(result[1])) {
        //   for (const file of result[1]) {
        // this.formData.append(`${fieldset.name}[0]['${result[0]}']`, file);
        //   }
        // }
        // this.formData.append(
        //   `${fieldset.name}.${result[0]}`,
        //   result[1] as string
        // );
      }
    });
    labels.forEach((e) => {
      const result = this.getKeyAndValue(this.extractLabel(e));
      if (result) {
        object[fieldset.name][result[0]] = result[1];
        // if (Array.isArray(result[1])) {
        //   for (const file of result[1]) {
        // this.formData.append(`${fieldset.name}[0]['${result[0]}']`, file);
        //   }
        // }
        // this.formData.append(
        //   `${fieldset.name}.${result[0]}`,
        //   result[1] as string
        // );
      }
    });
    return object;
  }

  private addToFormData([key, value]: Array<string | Blob | Blob[]>) {
    if (typeof key !== "string") throw new Error("Invalid key");
    if (Array.isArray(value)) {
      this.formObject[key] = [] as Blob[];
      for (const file of value) {
        this.formObject[key].push(file);
        this.formData.append(key, file);
      }
      return;
    }

    this.formObject[key] = value;
    this.formData.append(key, value);
  }

  private addToForm(child: HTMLInputElement) {
    const result = this.getKeyAndValue(child);
    result && this.addToFormData(result);
  }

  private parser() {
    for (const child of this.form?.target) {
      if (this.isTypeInput(child)) this.addToForm(child);
      else if (child instanceof HTMLLabelElement) {
        const inputElement = this.extractLabel(child);
        inputElement && this.addToForm(inputElement);
      } else if (child instanceof HTMLFieldSetElement) {
        const fieldsetResult = this.extractFieldSet(child);
        this.formData.append(child.name, JSON.stringify(fieldsetResult));
        Object.assign(this.formObject, fieldsetResult);
      }
    }
  }

  public setForm(form: FormEvent) {
    this.form = form;
    this.parser();
  }

  public get getFormAsObject() {
    return this.formObject as Record<string, any>;
  }

  public get getFormAsFormData() {
    return this.formData;
  }
}

export default FormParser;
