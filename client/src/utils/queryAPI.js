const buildOptions = (method, body) => {
  return {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    }
  }
}

const queryAPI = async (method, endpoint, body) => {
  try {
    const options = buildOptions(method, body);
    const res = await fetch(endpoint, options);
    return await res.json();
  }
  catch (err) {
    console.error(err);
  }
};

export default queryAPI;
