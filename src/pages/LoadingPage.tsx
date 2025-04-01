import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = () => {
  return (
    <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <CircularProgress />
    </main>
  );
};

export default LoadingPage;
