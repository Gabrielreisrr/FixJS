const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
    delay().then(() => {
      console.log("2s");
      delay().then(() => {
        console.log("3s");
      });
    });
  });
}
2 / 2;
umPorSegundo();

async function umPorSegundo2() {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
}

umPorSegundo2();
