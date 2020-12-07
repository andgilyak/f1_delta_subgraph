// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TransferItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferItem", id.toString(), this);
  }

  static load(id: string): TransferItem | null {
    return store.get("TransferItem", id) as TransferItem | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get from(): string | null {
    let value = this.get("from");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set from(value: string | null) {
    if (value === null) {
      this.unset("from");
    } else {
      this.set("from", Value.fromString(value as string));
    }
  }

  get to(): string | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set to(value: string | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromString(value as string));
    }
  }
}

export class Item extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Item entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Item entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Item", id.toString(), this);
  }

  static load(id: string): Item | null {
    return store.get("Item", id) as Item | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): string | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set value(value: string | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromString(value as string));
    }
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(value as string));
    }
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Owner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Owner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Owner", id.toString(), this);
  }

  static load(id: string): Owner | null {
    return store.get("Owner", id) as Owner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get items(): Array<string> | null {
    let value = this.get("items");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set items(value: Array<string> | null) {
    if (value === null) {
      this.unset("items");
    } else {
      this.set("items", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Pauser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pauser entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pauser entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pauser", id.toString(), this);
  }

  static load(id: string): Pauser | null {
    return store.get("Pauser", id) as Pauser | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}

export class Minter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Minter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Minter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Minter", id.toString(), this);
  }

  static load(id: string): Minter | null {
    return store.get("Minter", id) as Minter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}

export class ContractOwner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ContractOwner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ContractOwner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ContractOwner", id.toString(), this);
  }

  static load(id: string): ContractOwner | null {
    return store.get("ContractOwner", id) as ContractOwner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}
