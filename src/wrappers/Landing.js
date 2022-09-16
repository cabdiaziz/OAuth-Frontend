import styled from "styled-components";

const wrapper = styled.div`
  .page {
    min-height: calc(100vh - var (--nav-height));
    display: grid;
    algign-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(-max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    algign-items: center;
  }
  h1 {
    front-weight: 700;
    span {
      color: var(--primary-5000);
    }
  }
`;

export default wrapper;
