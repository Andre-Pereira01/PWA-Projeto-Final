module.exports = {
    success: {
      s0: {
        http: 201,
        code: 'User created',
        type: 'success'
      },
      s1: {
        http: 200,
        code: 'Users found',
        type: 'success'
      },
      s3: {
        http: 200,
        code: 'User already exists',
        type: 'success'
      },
      s4: {
        http: 200,
        code: 'User deleted',
        type: 'success'
      },
      s5: {
        http: 200,
        code: 'User data for _id',
        type: 'success'
      },
  
    },
    error: {
      e0: {
        http: 404,
        code: 'User not found'
      },
      e1: {
        http: 500,
        code: 'Internal Server Error'
      }
    }
  }