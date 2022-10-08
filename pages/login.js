import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import LandingLayout from '../layouts/Landing.layout'
import { Bottom, Center, CheckContainer, Container, FacebookBtn, FormFields, FormHeader, FormWrapper, FrameContainer, GoogleBtn, HelpSection, Input, InputContainer, OrContainer, RememberMe, SocialIcon, SocialLogin, SubmitButton, Wrapper } from '../styles/auth.style'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false)
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <FormHeader>
            <h2>Login to Influenzit</h2>
          </FormHeader>
          <Center>
            <FormFields>
              <InputContainer hasContent={username}>
                <label>Email / Username</label>
                <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
                />
              </InputContainer>
              <InputContainer hasContent={password}>
                <label>Password</label>
                <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                />
              </InputContainer>
              <SubmitButton type="submit">Login</SubmitButton>
            </FormFields>
            <HelpSection>
              <RememberMe>
                <button onClick={() => setRemember(!remember)}>
                  <FrameContainer>
                    <Image src="/check-frame.svg" alt="" height={18} width={18} />
                  </FrameContainer>
                  {
                    remember && <CheckContainer>
                      <Image src="/check-b.svg" alt="" height={10} width={13} />
                    </CheckContainer>
                  }
                </button>
                <span>Remember Me</span>
              </RememberMe>
              <Link href="/reset-password">
                <a>Forgot Password</a>
              </Link>
            </HelpSection>
            <OrContainer>
              <p>OR</p>
            </OrContainer>
            <SocialLogin>
              <FacebookBtn>
                <SocialIcon>
                  <Image src="/facebook-r.svg" alt="" height={22} width={22} />
                </SocialIcon>
                <span>Continue With Facebook</span>
              </FacebookBtn>
              <GoogleBtn>
                <SocialIcon>
                  <Image src="/google-r.svg" alt="" height={22} width={22} />
                </SocialIcon>
                <span>Continue With Google</span>
              </GoogleBtn>
            </SocialLogin>
          </Center>
          <Bottom>
            <p>Don&apos;t have an account? <Link href="/register/account-type"><a>Register Here</a></Link></p>
          </Bottom>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}
Login.getLayout = (page) => (
    <LandingLayout>
        {page}
    </LandingLayout>
)
export default Login