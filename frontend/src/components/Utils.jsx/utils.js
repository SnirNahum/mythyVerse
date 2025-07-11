export function createNodeStrutcture(data) {
  const positionX = 0;
  return {
    id: data.id,
    type: "default",
    data: data.name,
    position: { x: [positionX] + 150, y: 100 },
  };
}

export function restructureNodes(){
  
}
