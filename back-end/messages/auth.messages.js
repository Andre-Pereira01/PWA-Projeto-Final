module.exports = {
    success: {
      s0: {
        http: 200,
        code: 'LoginSuccessful',
        type: 'success'
      },
      s1: {
        http: 200,
        code: 'UserInfoRetrieved',
        type: 'success'
      }
    },
    error: {
      e0: {
        http: 403,
        code: 'UsernamePasswordWrong',
        type: 'error'
      },
      e1: {
        http: 401,
        code: 'InvalidToken',
        type: 'error'
      }
    }
  }
  