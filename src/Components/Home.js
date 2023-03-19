import React from "react";
import Card from "./Card";
import { motion } from "framer-motion"
// import img1 from './images/dog.jpg'


export default function Home() {
  return (
    <div style={{ margin: "0rem 1rem", marginTop: "0rem" }}>
      <div className="container">
        <h1 className="text-center">Fouders of MegaVet Healthcare Pvt.Ltd</h1>
        <div className="row">
          <div className="container col-md-5 my-2">
          <motion.div whileHover={{scale: 1.3}}>
            <Card
              title={"Steve Jobs"}
              imageUrl={
                "https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg"
              }
            />
            </motion.div>
          </div>
          <div className=" col-md-5 my-2">
            <Card
              title={"Bill Gates"}
              imageUrl={
                "https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxODAxMjA3ODg5NzMyNzM5/bill-gates_2.jpg"
              }
            />
          </div>
        </div>
          
          
          <h2 className="text-center my-3">Our Vision</h2>
          
          {/* <img src="https://media.wired.com/photos/60513229315b70928657dbfd/16:9/w_2400,h_1350,c_limit/OpEd-Cows-1231473414.jpg"  alt=""  /> */}
          
          <p className="p1 align-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At soluta blanditiis mollitia nulla illum corporis, voluptates ea earum, neque vel, quibusdam cupiditate harum provident tenetur labore asperiores illo perferendis! Expedita commodi alias nemo consequatur mollitia nesciunt sequi magnam temporibus, ex deleniti quidem laudantium minima voluptas suscipit aspernatur vel repellat at molestiae laboriosam eius repudiandae. Voluptatibus, quidem nesciunt error officia officiis magni, soluta rerum sunt voluptas non maxime fuga necessitatibus praesentium quaerat dignissimos a quis delectus? Voluptatem labore optio necessitatibus hic deleniti iure quis, in quas quos, nemo expedita officia. Quia id possimus dolorem tempore quasi, maiores delectus nesciunt fugiat recusandae obcaecati accusamus voluptate nemo itaque! Officia corporis sunt iste tempore cum inventore in labore saepe possimus assumenda praesentium aut voluptates quaerat quis nam voluptate, autem ab, velit fugit eveniet odit. Modi necessitatibus sed corporis unde velit deserunt enim nam possimus quasi voluptatum atque eaque cum incidunt sunt, aspernatur voluptatem, dicta, totam quibusdam illum cupiditate obcaecati vero quisquam. Laboriosam blanditiis ullam delectus officiis tenetur autem est numquam omnis impedit alias dicta distinctio minima repudiandae recusandae quae temporibus consequuntur, explicabo voluptatibus quas error praesentium officia perferendis? Ea aperiam necessitatibus, eaque inventore iure placeat eum error sunt exercitationem facilis, nulla minima eveniet omnis.
          </p>
          
          
          <h2 className="text-center my-3">Quality</h2>
          
          {/* <img src={img1} alt="" /> */}
          
          <p className="p2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At soluta blanditiis mollitia nulla illum corporis, voluptates ea earum, neque vel, quibusdam cupiditate harum provident tenetur labore asperiores illo perferendis! Expedita commodi alias nemo consequatur mollitia nesciunt sequi magnam temporibus, ex deleniti quidem laudantium minima voluptas suscipit aspernatur vel repellat at molestiae laboriosam eius repudiandae. Voluptatibus, quidem nesciunt error officia officiis magni, soluta rerum sunt voluptas non maxime fuga necessitatibus praesentium quaerat dignissimos a quis delectus? Voluptatem labore optio necessitatibus hic deleniti iure quis, in quas quos, nemo expedita officia. Quia id possimus dolorem tempore quasi, maiores delectus nesciunt fugiat recusandae obcaecati accusamus voluptate nemo itaque! Officia corporis sunt iste tempore cum inventore in labore saepe possimus assumenda praesentium aut voluptates quaerat quis nam voluptate, autem ab, velit fugit eveniet odit. Modi necessitatibus sed corporis unde velit deserunt enim nam possimus quasi voluptatum atque eaque cum incidunt sunt, aspernatur voluptatem, dicta, totam quibusdam illum cupiditate obcaecati vero quisquam. Laboriosam blanditiis ullam delectus officiis tenetur autem est numquam omnis impedit alias dicta distinctio minima repudiandae recusandae quae temporibus consequuntur, explicabo voluptatibus quas error praesentium officia perferendis? Ea aperiam necessitatibus, eaque inventore iure placeat eum error sunt exercitationem facilis, nulla minima eveniet omnis.
          </p>

          </div>
    </div>
  );
}
