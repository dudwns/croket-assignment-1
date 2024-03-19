const WindMill = ({ row }: { row: number }) => {
  const RenderTopTriangle = () => {
    const topTriangle = [];

    for (let i = row; i >= 1; i--) {
      let stars = "";

      for (let j = row; j >= 1; j--) {
        if (j <= i) {
          stars += "⭐ ";
        } else {
          stars += "🌌 ";
        }
      }

      for (let j = 1; j <= row; j++) {
        if (j < i) {
          stars += "🌌 ";
        } else {
          stars += "⭐ ";
        }
      }

      topTriangle.push(<div key={i}>{stars}</div>);
    }
    return topTriangle;
  };

  const RenderBottomTriangle = () => {
    const bottomTriangle = [];

    for (let i = row; i >= 1; i--) {
      let stars = "";

      for (let j = 1; j <= row; j++) {
        if (j <= i) {
          stars += "⭐ ";
        } else {
          stars += "🌌 ";
        }
      }

      for (let j = row; j >= 1; j--) {
        if (j < i) {
          stars += "🌌 ";
        } else {
          stars += "⭐ ";
        }
      }

      bottomTriangle.push(<div key={i}>{stars}</div>);
    }
    return bottomTriangle;
  };

  return (
    <>
      {RenderTopTriangle()}
      {RenderBottomTriangle()}
    </>
  );
};

export default WindMill;
