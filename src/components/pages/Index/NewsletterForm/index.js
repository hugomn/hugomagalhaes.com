import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'components/Flex';
import { Box } from 'components/Box';
import { Label } from 'components/ui/Label';
import { Input } from 'components/ui/Input';
import Button from 'components/ui/Button';
import Text from 'components/ui/Text';
import { media } from 'constants/responsive';

const NewsletterForm = () => {
  return (
    <Container>
      <ResponsiveFlex flexDirection="row" justifyContent="space-between">
        <Flex flexDirection="column" alignItems="center" justifyContent="center" width="100%" p="4">
          <Box>
            <img height="86" src="/img/grow_newsletter.png" alt="Grow Newsletter" />
          </Box>
          <Text textAlign="center" lineHeight="1.6" fontWeight="200" mt="3" px="4" py="2">Grow is a project led by me and my friend Daniel Watts, which delivers curated content for engineering leaders, CTOs and anyone interested in helping people grow and building the teams that are building software.</Text>
        </Flex>
        <Form
          action="https://www.getrevue.co/profile/grow/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <Flex flexDirection="column" p={[4, 5]} minWidth={['auto', 'auto', '450px']}>
            <Title>Join Grow Newsletter</Title>
            <Label color="white" htmlFor="email" fontWeight="500">
                E-mail address:
            </Label>
            <Input
              type="email"
              name="member[email]"
              placeholder="Type your e-mail"
              id="member_email"
              required
              mb="4"
              bg="accent.0"
            />
            <Label color="white" htmlFor="email" fontWeight="500">
                First name (optional):
            </Label>
            <Input
              type="text"
              name="member[first_name]"
              placeholder="Type your e-mail"
              id="member_first_name"
              mb="4"
              bg="accent.0"
            />
            <div className="revue-form-actions">
              <Button type="submit">Subscribe</Button>
            </div>
          </Flex>
        </Form>
      </ResponsiveFlex>
    </Container>);
};

const ResponsiveFlex = styled(Flex)`
  flex-direction: column;
  ${media.md`
    flex-direction: row;
  `};
`;

const Container = styled.section`
  margin: 70px 0px 50px;
  border: ${props => props.theme.blog.list.item.border};
  border-radius: 0.25rem;
`;

const Title = styled.h2`
  padding: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 30px;
`;

const Form = styled.form`
  border-radius: 0.25rem;
  background: #456EF7 url('/img/welcome_bg.png') repeat-x bottom left;
  background-size: 1px 408px;
`;

export default NewsletterForm;
