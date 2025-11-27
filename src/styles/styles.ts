import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter-Regular.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Bold";
        src: url("/fonts/Inter-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Inter', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #F5F5F5;
        overflow-x: hidden;
    }

    a:hover {
        color: #1E1F1F;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #1E1F1F 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Inter', serif;
        color: #1E1F1F;
        font-size: 48px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 36px;
        }

        @media only screen and (max-width: 414px) {
          font-size: 28px;
        }
    }

    p {
        // font-family: 'Inter', serif;
        color: #1E1F1F;
        font-size: 18px;
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #1E1F1F;

        :hover {
            color: #1E1F1F;
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
