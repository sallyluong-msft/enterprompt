const getClientPrincipal = (req) => {
  try {
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    return JSON.parse(decoded);
  } catch (error) {
    return {};
  }
};

const getOperationIdOverride = (context) => {
  return {
    'ai.operation.id': context.traceContext.traceparent,
  };
};


module.exports = {
  getClientPrincipal,
  getOperationIdOverride,
};
