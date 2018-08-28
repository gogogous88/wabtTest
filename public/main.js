const onButtonClick = () => {
  const inputValue = document.getElementById("form1");
  const { value } = inputValue.elements[0];
  document.getElementById("jsSquare").innerHTML = value * value;
};

const loadWebAssembly = async fileName => {
  const res = await fetch(fileName);
  const bits = await res.arrayBuffer();
  const module = await WebAssembly.compile(bits);
  return new WebAssembly.Instance(module);
};

const onWabtClick = () => {
  const inputValue = document.getElementById("form1");
  const { value } = inputValue.elements[0];

  loadWebAssembly("square.wasm").then(instance => {
    squarer = instance.exports._Z7squareri;
    console.log("Finished compiling! Ready when you are...");
    document.getElementById("jsSquare").innerHTML = squarer(value);
  });
};
