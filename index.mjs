// Sync
export const syncCalculatorHandler = async (event) => {
  console.log('[LOG] : ', JSON.stringify(event, null, 4))

  const { idx1, idx2, opt } = event

  let result
  switch (opt) {
    case '+':
      result = idx1 + idx2
      break
    case '-':
      result = idx1 - idx2
      break
    case '*':
      result = idx1 * idx2
      break
    case '/':
      result = idx1 / idx2
      break
  }

  return {
    status: 200,
    data: result,
  }
}

// Async
