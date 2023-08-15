import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

class Filter {
  private _state: any[] = [];
  private readonly setState: ActionCreatorWithPayload<any, any>;

  constructor(setState: ActionCreatorWithPayload<any, any>) {
    this.setState = setState;
  }

  select(item: any, type: "checkout" | "product" | "order") {
    const foundedItem = this._state.findIndex((state) => {
      switch (type) {
        case "checkout":
          return state.id.slug === item.id.slug;
        case "product":
          return state.slug === item.slug;
        case "order":
          return state.slug === item.slug;
        default:
          return;
      }
    });
    if (foundedItem !== -1) this._state.splice(foundedItem, 1);
    else this._state.push(item);
    this.setState(this._state);
  }

  selectAll(items?: any[]) {
    if (!items) return;
    if (this._state.length === items.length) this._state = [];
    else {
      this._state = [];
      this._state.push(...items);
    }
    this.setState(this._state);
  }

  get state(): any[] {
    return this._state;
  }
}

export { Filter };
