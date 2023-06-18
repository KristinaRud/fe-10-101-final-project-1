export const generateThankYouEmail = (products) => {
  const tableRows = products
    .map(
      (item) => `
    <tr>
      <td>${item?.product?.name || item?.description}</td>
      <td>${item?.product?.currentPrice || item?.currentPrice}</td>
      <td>${item.cartQuantity}</td>
    </tr>
  `,
    )
    .join("");

  const emailContent = `
    <html lang="en">
      <head>
        <style>
          h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th, td {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            text-align: left;
          }

          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }

          p {
            margin-top: 20px;
            font-size: 16px;
          }
        </style><title>Thank you for your order!</title>
      </head>
      <body>
        <h2>Thank you for your order!</h2>
        <p>Your order contains the following products:</p>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        <p>Please contact us if you have any questions.</p>
        <p>Thank you again!</p>
      </body>
    </html>
  `;

  return emailContent;
};
