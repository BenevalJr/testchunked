async function TestChunked(aRequest, aResponse) {
  var lResponse = [];

  for (var i = 0; i < 100000; i++) {
    let lId = i.toString();
    lResponse.push({
      //id: lId,
      description: "description ", //+ lId,
    });
  }

  aResponse.status(200).json(lResponse);
}

export default TestChunked;
