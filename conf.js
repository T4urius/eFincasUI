exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['registro-spec.js', 'atualizar-spec.js', 'deletar-spec.js'],
  chromeOnly: true,
  directConnect: true,
};