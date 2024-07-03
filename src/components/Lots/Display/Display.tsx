import classes from './Display.module.css'

const display = ({ char, size }: { char: string, size: string }) => {
  return (
    <span className={[`flex ${size == "regular" ? "w-[16.6%] md:w-[8.3%]" : "w-11"}   aspect-square grow-0 shrink-0 border-2 border-slate-200 rounded-lg justify-center items-center`, classes.gradient_button].join(' ')}>
      <span className={[`text-white shadow-sm ${size == "regular" ? "text-lg" : "text-xs"} font-bold `, classes.text_shadow].join(' ')}>{char}</span>
    </span>
  );
}

export default display;