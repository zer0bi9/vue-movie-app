exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'ZER0BI9',
      age: 85,
      email: 'zerobi9@gmail.com'
    })
  }
}