import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const socials = [
  {
    outlet: "LinkedIn",
    href: "https://www.linkedin.com/shareArticle?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&title=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React",
    background: "#0a66c2",
    color: "white",
    label: "ShareonLinkedIn",
    icon: <LinkedInIcon />
  },
  {
    outlet: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig",
    background: "#3b5898",
    color: "white",
    label: "ShareonFacebook",
    icon: <FacebookIcon />
  },
  {
    outlet: "Twitter",
    href: "https://twitter.com/intent/tweet?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&text=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&via=dannysasse",
    background: "#00aced",
    color: "white",
    label: "ShareonTwitter",
    icon: <TwitterIcon />
  },

  {
    outlet: "Email",
    href: "mailto:?subject=Beginner's%20GuidetoJest%20Testing%20inReact&body=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig%20CheckoutthisnewarticleonJest%20testinginReact!", background: "#dd4b39",
    color: "white",
    label: "ShareviaEmail",

    icon: <MailOutlineIcon />
  }];




export default function SocialsLink() {
  const socialLinks = socials.map((social, index) => {
    return (
      <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={social.label}
        role="button"
        key={index}
        style={{
          display: "flex",
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          background: social.background,
          color: social.color,
          borderRadius: "100%",
          outline: "none",
          border: `2px solid ${social.background}`,
          padding: "8px",
          transform: "scale(0.8)",
          transition: "all 0.2s, transform 0.2s 0.2s",
        }}
        hover={{
          background: "white",
          color: social.background,
        }}
      >
        {social.icon}
      </a>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {socialLinks}
      </div>
    </div>
  );
}
