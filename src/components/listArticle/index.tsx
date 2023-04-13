import React from 'react'
import styles from "@/styles/Home.module.scss";

export default function ListArticle() {
    return (
        <div className={styles.listArticle}>
            <div className={styles.listArticle_list}>
                <img src="/img/listArticle_img1.png" alt=""
                    className={styles.listArticle_item}
                    id={styles.listArticle_item_img}
                />
                <p className={styles.listArticle_item} id={styles.author}>By James Landale</p>
                <p className={styles.listArticle_item} id={styles.team}>TeamliserVCorp</p>
                <p className={styles.listArticle_item} id={styles.listArticle_item_content}>
                    Nghiên cứu cho thấy game thủ có kỹ năng đưa ra quyết
                    định tốt hơn với hoạt động não bộ tăng cường
                </p>
                <button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</button>
            </div>
            <div className={styles.listArticle_list}>
                <img src="/img/listArticle_img2.png" alt=""
                    className={styles.listArticle_item}
                    id={styles.listArticle_item_img}
                />
                <p className={styles.listArticle_item} id={styles.author}>By James Landale</p>
                <p className={styles.listArticle_item} id={styles.team}>TeamliserVCorp</p>
                <p className={styles.listArticle_item} id={styles.listArticle_item_content}>
                    Dynamic avatars for legacy capture:
                    a revolution of blockchain use in the making
                </p>
                <button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</button>
            </div>
            <div className={styles.listArticle_list}>
                <img src="/img/listArticle_img3.png" alt=""
                    className={styles.listArticle_item}
                    id={styles.listArticle_item_img}
                />
                <p className={styles.listArticle_item} id={styles.author}>By James Landale</p>
                <p className={styles.listArticle_item} id={styles.team}>TeamliserVCorp</p>
                <p className={styles.listArticle_item} id={styles.listArticle_item_content}>
                    Blockchain.com Shopping Assets to Fill
                    $270M Hole From Three Arrows Capital: Sources
                </p>
                <button className={styles.listArticle_item}
                    id={styles.listArticle_item_earn}>#EARN</button>
            </div>
        </div>
    )
}
