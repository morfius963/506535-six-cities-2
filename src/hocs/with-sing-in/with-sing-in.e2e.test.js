import React from 'react';
import {mount} from 'enzyme';
import withSingIn from "./with-sing-in.jsx";
import SingIn from "../../components/sing-in/sing-in.jsx";

describe(`end to end test`, () => {
  it(`Component should correctly change state after input`, () => {
    const onSubmit = jest.fn();
    const evt = {
      preventDefalut: jest.fn()
    };
    const evt1 = {
      target: {
        name: `email`,
        value: `morf@gmail.com`
      }
    };
    const evt2 = {
      target: {
        name: `password`,
        value: `1234567890`
      }
    };
    const props = {
      onSubmit,
      city: `Amsterdam`,
      userInputHandler: jest.fn(),
      formSubmitHandler: jest.fn()
    };
    const MockComponentWrapped = withSingIn(SingIn);

    const authorizationScreen = mount(<MockComponentWrapped {...props} />);

    const emailField = authorizationScreen.find(`input[name="email"]`);
    const passwordField = authorizationScreen.find(`input[name="password"]`);
    const form = authorizationScreen.find(`.login__form`);

    emailField.simulate(`change`, evt1);
    expect(authorizationScreen.state()).toEqual({
      email: `morf@gmail.com`,
      password: ``
    });

    form.simulate(`submit`, evt);
    expect(onSubmit).toHaveBeenCalledWith(
        {
          email: `morf@gmail.com`,
          password: ``
        },
        expect.any(Function)
    );

    passwordField.simulate(`change`, evt2);
    expect(authorizationScreen.state()).toEqual({
      email: `morf@gmail.com`,
      password: `1234567890`
    });

    form.simulate(`submit`, evt);
    expect(onSubmit).toHaveBeenCalledWith(
        {
          email: `morf@gmail.com`,
          password: `1234567890`
        },
        expect.any(Function)
    );
  });
});
