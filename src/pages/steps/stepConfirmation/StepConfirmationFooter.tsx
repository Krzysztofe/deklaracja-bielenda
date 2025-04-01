import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import ImgLogoIp from "../../../images/ImgLogoIp";
import { rwd } from "../../../utils/rwd";

enum TypographyVariant {
  FS16RG = "fs_16_rg",
  FS16SB = "fs_16_sb",
}

const createTypographyProps = (variant: TypographyVariant) => ({
  color: "info.dark",
  component: "p",
  variant,
});

const texts = [
  { variant: TypographyVariant.FS16SB, text: "KONTAKT:" },
  {
    variant: TypographyVariant.FS16RG,
    text: "tel. 736-850-536",
  },
  {
    variant: TypographyVariant.FS16RG,
    text: "ipamazon@wp.pl",
  },
  { variant: TypographyVariant.FS16SB, text: "WWW:" },

  {
    variant: TypographyVariant.FS16RG,
    text: "www.ozzip.pl",
    link: "https://ozzip.pl/",
  },
  { variant: TypographyVariant.FS16SB, text: "FACEBOOK:" },
  {
    variant: TypographyVariant.FS16RG,
    text: "OZZ Inicjatywa Pracownicza Amazon",
    link: "https://facebook.com/IPAmazon",
  },
];

const StepConfirmationFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: rwd("column-reverse", "row"),
      }}
    >
      <Box
        sx={{
          py: rwd(6.6, 6),
          mr: rwd("auto", 4),
        }}
      >
        {texts.map(({ variant, text, link }) => (
          <Typography key={text} {...createTypographyProps(variant)}>
            {link ? (
              <Link
                to={link}
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
                target="_blank"
              >
                {text}
              </Link>
            ) : (
              text
            )}
          </Typography>
        ))}
      </Box>
      <ImgLogoIp />
    </Box>
  );
};

export default StepConfirmationFooter;
