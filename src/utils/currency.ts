class Currency {
  static toString(value: number) {
    const valueArray = String(value).split('');
    while(valueArray.length < 3) valueArray.push('0');
    const floatingPart = valueArray.slice(-2);
    const integerPart = valueArray.slice(0, -2);
    return [...integerPart, '.', ...floatingPart].join('');
  }

  static fromString(value: string) {
    if (!value.includes('.')) throw new Error('Invalid floating point format, use "." notation')
    const [integerPart, floatingPart] = value.split('.');
    if (floatingPart.length < 2) throw new Error('Invalid floating part format')
    return Number([...integerPart, ...floatingPart].join(''));
  }
}

export default Currency