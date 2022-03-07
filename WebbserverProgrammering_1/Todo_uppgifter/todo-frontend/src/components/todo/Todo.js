// import css from '../views/TaskView/TaskView.module.css'
//
// export default function Todo(props) {
//     console.log(props)
//     return (
//         <li className={`${css.todo} ${css.stackSmall}`}>
//             <div className={css.cCb}>
//                 <input id={props.id} type="checkbox" defaultChecked={props.completed} />
//                 <label className={css.todoLabel} htmlFor={props.id} >
//                     {props.name}
//                 </label>
//             </div>
//             <div className={css.btnGroup}>
//                 <button type="button" className={css.btn}>
//                     Edit <span className={css.visuallyHidden}>{props.name}</span>
//                 </button>
//                 <button type="button" className={`${css.btn} ${css.btnDanger}`}>
//                     Delete <span className={css.visuallyHidden}>{props.name}</span>
//                 </button>
//             </div>
//         </li>
//
//     );
// }