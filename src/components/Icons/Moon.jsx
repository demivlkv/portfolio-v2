const Moon = () => {
  return (
    <div>
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="transition-all ease-in duration-300"
      >
        <use href="/feather-sprite.svg#moon"/>
      </svg>
    </div>
  );
};

export default Moon;