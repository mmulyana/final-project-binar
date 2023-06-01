import {render} from '@testing-library/react'
import Button from '@/component/Button'

describe('button component', () => {
    it('render children correctly', () => {
        const { getByText } = render(<Button>Sign up</Button>)
        const btn = getByText(/sign up/i)
        expect(btn).toBeInTheDocument()
    })
})