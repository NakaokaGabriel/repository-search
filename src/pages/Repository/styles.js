import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  h2 {
    margin-bottom: 15px;
    color: #333;
    font-size: 24px;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #7159c1;
          color: #fff;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          padding: 5px 10px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  margin: 15px 0;

  button {
    background: transparent;
    padding: 5px 10px;
    border: 2px solid #7159c1;
    color: #7159c1;
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.3s;

    &:nth-child(${props => props.active + 1}) {
      background: #7159c1;
      color: #fff;
    }

    & + button {
      margin-left: 15px;
    }

    &:hover {
      background: #7159c1;
      color: #fff;
    }
  }
`;

export const PageActions = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    background: #7159c1;
    color: #fff;
    border: none;
    padding: 10px 10px;
    border-radius: 4px;
    font-weight: 600;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  span {
    font-size: 16px;
    color: #7159c1;
    font-weight: bold;
  }
`;
