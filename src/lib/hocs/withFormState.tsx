// import { useFormField } from '@/components/ui/form'
import * as React from 'react'

type SupportedFormInput = object

const withFormState = <P extends object>(
  Component: React.FC<P & { color: 'error' | 'default' | string | null | undefined }>
): React.FC<P & SupportedFormInput> => {
  return function WithFormState({ ...props }: SupportedFormInput) {
    // const { error } = useFormField()

    const error = null
    return <Component color={error ? 'error' : 'default'} {...(props as P)} />
  }
}

export default withFormState
