/**
 * @desc
 * Basic Sync Lambda
 */
export const syncCalculatorHandler = async (event) => {
  console.log('[LOG] : ', JSON.stringify(event, null, 4))
  console.log('[ENV] : ', process.env.ENV, '[AUTHOR] : ', process.env.author)

  const { idx1, idx2, opt } = event

  return {
    status: 200,
    data: calculator(idx1, idx2, opt),
  }
}

/**
 * @desc
 * HTTP Call
 */
export const asyncCalculatorHandler = async (event) => {
  console.log(`[RECEIVED] ${JSON.stringify(event, null, 2)}`)

  const { idx1, idx2, opt } = event.body

  return {
    status: 200,
    data: calculator(idx1, idx2, opt),
  }
}

const calculator = (idx1, idx2, opt) => {
  switch (opt) {
    case '+':
      return idx1 + idx2

    case '-':
      return idx1 - idx2

    case '*':
      return idx1 * idx2

    case '/':
      return idx1 / idx2

    default:
      return null
  }
}
