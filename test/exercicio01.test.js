const { vnuts } = require('../src/exercise01')

describe('Suíte de Testes de Execício 01', () => {
  it('Deve retornar Visual Nuts se o número for divisível por 3 e 5 ao mesmo tempo', () => {
    expect(vnuts(15)).toBe('Visual Nuts')
    expect(vnuts(30)).toBe('Visual Nuts')
    expect(vnuts(60)).toBe('Visual Nuts')
    expect(vnuts(90)).toBe('Visual Nuts')
  })

  it('Deve Retornar Visual quando for divisível por 3', () => {
    expect(vnuts(3)).toBe('Visual')
    expect(vnuts(9)).toBe('Visual')
    expect(vnuts(18)).toBe('Visual')
  });

  it('Deve Retornar Nuts quando for divisível por 5', () => {
    expect(vnuts(5)).toBe('Nuts')
    expect(vnuts(10)).toBe('Nuts')
    expect(vnuts(20)).toBe('Nuts')
  })

  it('Deve retornar o número de entrada caso não satisfaça as condições acima', () => {
    expect(vnuts(2)).toBe(2)
    expect(vnuts(8)).toBe(8)
    expect(vnuts(32)).toBe(32)
  })
})
