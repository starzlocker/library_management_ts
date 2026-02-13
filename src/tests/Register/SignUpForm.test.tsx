import { SignUpForm } from '@/components/RegisterPage/SignUpForm/SignUpForm';
import { render, screen } from '@testing-library/react';

describe('SignUp Form', () => {
  it('renders the component', () => {
    render(<SignUpForm />);
    expect(screen.getByText(/SignUp Form/));
  });

  it('has a first name, last name, email and phone number input', () => {
    render(<SignUpForm />);

    expect(screen.getByLabelText(/primeiro nome/i, {
      selector: 'input',
    })).toBeEnabled();
    expect(screen.getByLabelText(/sobrenome/i, {
      selector: 'input',
    })).toBeEnabled();
        expect(screen.getByLabelText(/email/i, {
      selector: 'input',
    })).toBeEnabled();
        expect(screen.getByLabelText(/celular/i, {
      selector: 'input',
    })).toBeEnabled();
  });

  it('has a submit button and is initially disabled', () => {
    render(<SignUpForm />);
    expect(screen.getByRole('submit')).toBeDisabled();
  })

  it('has a cancel button and is enabled', () => {
    render(<SignUpForm />);
    expect(screen.getByRole('cancel')).toBeEnabled();
  })

});
