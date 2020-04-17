export class Provider {
  id: string;
  name: string;
  address: string;
  phone: string;
  // selected: boolean;

  constructor(id: string, name: string, address: string, phone: string, selected: boolean) {
    this.id =  id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    // this.selected = selected;
  }
}
