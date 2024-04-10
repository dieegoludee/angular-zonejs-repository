export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Diego'
}

const passenger2: Passenger = {
  name: 'Fernando',
  children: ['Natalia', 'Pablo']
}

const printChildren = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;
  // const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);
  return howManyChildren;
}

printChildren(passenger1);