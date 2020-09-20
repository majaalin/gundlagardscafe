import Link from 'next/link';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Nav = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Container show={isOpen}>
      <div className="burger__wrapper">
        <Hamburger rounded size={35} toggled={isOpen} toggle={setOpen} />
      </div>

      {/* MOBILE */}

      <nav className="nav-mobile">
        <img
          data-src="/Ellipse.png"
          className="ellipse"
          className="lazyload"
        ></img>

        <Link href="/">
          <a onClick={() => setOpen(false)}>Hem</a>
        </Link>

        <Link href="/hitta-hit#oppettider">
          <a onClick={() => setOpen(false)}>Öppettider</a>
        </Link>

        <Link href="/hitta-hit#hitta-hit">
          <a onClick={() => setOpen(false)}>Hitta hit</a>
        </Link>

        <Link href="/mat">
          <a onClick={() => setOpen(false)}>Äta</a>
        </Link>

        <Link href="/event">
          <a onClick={() => setOpen(false)}>Evenemang</a>
        </Link>

        <Link href="/privata-event">
          <a onClick={() => setOpen(false)}>Privata event</a>
        </Link>

        <Link href="/#about">
          <a onClick={() => setOpen(false)}>Om oss</a>
        </Link>

        <Link href="/#contact">
          <a onClick={() => setOpen(false)}>Kontakt</a>
        </Link>

        <Link href="/fragor-svar">
          <a onClick={() => setOpen(false)}>Frågor och svar</a>
        </Link>

        <div className="social">
          <h3>Följ oss!</h3>
          <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
            <img data-src="/fb-dark.png" className="lazyload"></img>
          </a>
          <a
            href="https://www.instagram.com/gundlagardscafe/?__a=2"
            target="_blank"
          >
            <img data-src="insta-dark.png" className="lazyload"></img>
          </a>
        </div>
        <div>
          <div className="contact-info">
            <p>Kontaktinfo:</p>
            <p>Samantha Larsen</p>
            <a className="mail-to" href="mailto:gundlagardscafe@gmail.com">
              gundlagardscafe@gmail.com
            </a>

            <p>mobil: 0708-84 07 17 </p>
          </div>
        </div>
        <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
        <div className="tent">
          <img data-src="/tent-menu.png" className="lazyload"></img>
        </div>
      </nav>

      {/* DESKTOP */}

      <nav className="nav-desktop">
        <div className="nav-desktop__links">
          <Link href="/">
            <a onClick={() => setOpen(false)}>Hem</a>
          </Link>

          <Link href="/hitta-hit#oppettider">
            <a onClick={() => setOpen(false)}>Öppettider</a>
          </Link>

          <Link href="/#about">
            <a onClick={() => setOpen(false)}>Om oss</a>
          </Link>

          <Link href="/#contact">
            <a onClick={() => setOpen(false)}>Kontakt</a>
          </Link>

          <Link href="/fragor-svar">
            <a onClick={() => setOpen(false)}>Frågor och svar</a>
          </Link>

          <div className="social">
            <h3>Följ oss!</h3>
            <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
              <img data-src="/fb-dark.png" className="lazyload"></img>
            </a>
            <a
              href="https://www.instagram.com/gundlagardscafe/?__a=2"
              target="_blank"
            >
              <img data-src="insta-dark.png" className="lazyload"></img>
            </a>
          </div>
        </div>

        <div className="info-wrapper">
          <div className="contact-info">
            <p>Kontaktinfo:</p>
            <p>Samantha Larsen</p>
            <a className="mail-to" href="mailto:gundlagardscafe@gmail.com">
              gundlagardscafe@gmail.com
            </a>

            <p>mobil: 0708-84 07 17 </p>
          </div>
          <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
        </div>

        <div className="tent-desktop">
          <img data-src="/tent-desktop.png" className="lazyload"></img>
        </div>
        <img
          data-src="/Ellipse-desktop.png"
          className="ellipse-desktop lazyload"
        ></img>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  .burger__wrapper {
    margin-right: 16px;
    padding: 8px;
  }
  .hamburger-react {
    z-index: 500;
  }

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 14px;
    line-height: 25px;
  }

  a {
    z-index: 99;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 44px;
  }

  .mail-to {
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    line-height: 25px;
  }

  .nav-mobile {
    display: flex;
    flex-direction: column;
    padding: 64px 0 0 32px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    z-index: 90;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    height: ${(props) => (props.show ? '100%' : '66px')};
    transition: all 0.2s ease-in-out;

    a {
      padding-bottom: 32px;
    }
  }

  .social {
    display: flex;
    flex-direction: row;
  }

  .social h3 {
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 44px;
    padding-right: 32px;
  }

  .social img {
    padding-right: 8px;
  }

  .social a {
    padding: 0;
  }

  .ellipse {
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    z-index: -1;
    position: absolute;
    left: 0;
    top: 489px;
  }

  .contact-info {
    padding: 64px 0 32px 0;
  }

  .contact-info p {
    font-weight: 300;
  }

  .contact-info + p {
    font-weight: 300;
  }

  .tent {
    display: flex;
    justify-content: center;
    flex: 0 1 auto;
    width: 100%;
    height: 100%;
    margin-top: 64px;
    margin-bottom: 128px;
  }

  .nav-desktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .nav-mobile {
      display: none;
    }

    .nav-desktop {
      display: flex;
      flex-direction: column;
      padding: 64px 0 0 32px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: scroll;
      z-index: 90;
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
      height: ${(props) => (props.show ? '100%' : '66px')};
      transition: all 0.2s ease-in-out;
      top: 66px;
      padding: 0;

      a,
      .social h3 {
        font-family: Amatic SC;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
      }

      .mail-to {
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        line-height: 25px;
      }
    }

    .nav-desktop__links {
      display: flex;
      flex-direction: row;
      margin: 112px auto;
      a {
        margin: 0 64px;
      }
    }

    .social h3 {
      margin-left: 64px;
    }
    .social a {
      margin: 0;
    }

    .info-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
    }
    .contact-info {
      padding: 0;
      margin: 0;
      margin-right: 140px;
    }

    .tent-ellipse {
      height: 100%;
      position: relative;
      bottom: 0;
    }

    .ellipse-desktop {
      visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
      z-index: -1;
      position: absolute;
      left: 172px;
      bottom: 0;
      height: 669px;
    }

    .tent-desktop {
      position: absolute;
      bottom: 0;
      right: 206px;
      margin-bottom: 64px;
      height: 33%;
      visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    }
  }
`;

Nav.propTypes = {
  show: PropTypes.bool,
};

export default Nav;