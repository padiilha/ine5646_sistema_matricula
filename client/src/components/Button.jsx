import { Button, HFlow, VFlow } from 'bold-ui'
import React from 'react'

function ButtonSizes() {
  return (
    <VFlow>
      <HFlow alignItems='flex-end'>
      </HFlow>
      <Button kind='primary' block>
        Block button
      </Button>
    </VFlow>
  )
}

export default ButtonSizes