import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from './'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({freelancersList: freelancersMockedData}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Should render without crash', async () => {
    render(<Freelances />)
    expect(screen.getByTestId('loader')).toBeTruthy()
})

it('Should display freelances name', async () => {
    render(<Freelances />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))    
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})