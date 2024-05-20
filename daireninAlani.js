const arguments = process.argv.slice(2);

function CircleAreaCalc(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(
    `Yaricapi (${radius}) olan dairenin alani: (${parseFloat(area).toFixed(2)})`
  );
}

CircleAreaCalc(arguments[0]);