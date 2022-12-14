const socket = io.connect();

const inputs = document.getElementsByTagName("input");
const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newProduct = {
    name: inputs[0].value,
    price: inputs[1].value,
    thumbnail: inputs[2].value,
  };
  socket.emit("client-product", newProduct);
});

socket.on("products", (data) => {
  let productsList = data
    .map(
      (product) => `
    <tr>
        <th scope="row">
            ${product.id}
        </th>
        <td>
            ${product.name}
        </td>
        <td>
            ${product.price}
        </td>
        <td><img src="${product.thumbnail}" class="w-25 h-auto"></td>
    </tr>
    `
    )
    .join("");

  document.getElementById("list").innerHTML = productsList;
});
