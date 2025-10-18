import { Amplify } from 'aws-amplify'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const awsConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'us-east-2_R76xUn4z6',
        userPoolClientId: '5qbbsadnkqn8tm34fhvou1j8d7'
      }
    },
    ssr: true
  }

  Amplify.configure(awsConfig)
})
