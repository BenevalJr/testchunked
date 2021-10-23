async function TestChunked(aRequest, aResponse) {
  var lResponse = [];

  for (var i = 0; i < 10000; i++) {
    lResponse.push({
      id: i.toString,
      description: "description " + i.toString,
    });
  }

  aResponse.status(200).json(lResponse);
}

export default TestChunked;
