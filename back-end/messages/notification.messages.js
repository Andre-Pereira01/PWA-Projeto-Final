module.exports = {
    success: {
      s0: {
        http: 201,
        code: 'Notification created',
        type: 'success'
      },
      s1: {
        http: 200,
        code: 'All notifications',
        type: 'success'
      },
      s3: {
        http: 200,
        code: 'Notification already exists',
        type: 'success'
      },
      s4: {
        http: 200,
        code: 'Notification deleted',
        type: 'success'
      },
      s5: {
        http: 200,
        code: 'Notification by _id',
        type: 'success'
      },
  
    },
    error: {
      e0: {
        http: 404,
        code: 'Notification not found'
      },
      e1: {
        http: 500,
        code: 'Internal Server Error'
      }
    }
  }