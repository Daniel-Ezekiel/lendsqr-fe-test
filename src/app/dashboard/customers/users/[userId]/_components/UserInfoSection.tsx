import styles from "@/app/_sass/userInfoSection.module.scss";
import { GuarantorDetailsArr } from "@/app/_types/guarantorDetailsArr.types";

function UserInfoSection({
  title,
  sectionDetails,
  guarantorDetailsArr,
}: {
  title: string;
  sectionDetails?: { name: string; value: string | number }[];
  guarantorDetailsArr?: GuarantorDetailsArr;
}) {
  return (
    <div className={styles.subsection}>
      <h3 className={styles.subsectionTitle}>{title}</h3>

      {title !== "Guarantor" && (
        <div className={styles.subsectionContent}>
          {sectionDetails?.map((detail, i) => (
            <div className={styles.subsectionContentItem} key={i}>
              <span className={styles.subsectionContentItemLabel}>
                {detail.name}
              </span>
              <span className={styles.subsectionContentItemValue}>
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {title === "Guarantor" && (
        <div className={styles.guarantorSubsectionContent}>
          {guarantorDetailsArr?.map((guarantorDetails, i) => (
            <div key={i} className={styles.guarantorDetailsContainer}>
              {guarantorDetails.map((detail, i) => (
                <div
                  className={`${styles.subsectionContentItem} ${
                    i === 1 && styles.subsectionContentItem2
                  }`}
                  key={i}
                >
                  <span className={styles.subsectionContentItemLabel}>
                    {detail.name}
                  </span>
                  <span className={styles.subsectionContentItemValue}>
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* <div className={styles.subsectionContent}>
        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>Full Name</span>
          <span className={styles.subsectionContentItemValue}>
            {(user as UserTypes)?.profile?.firstName}{" "}
            {(user as UserTypes)?.profile?.lastName}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>Phone No.</span>
          <span className={styles.subsectionContentItemValue}>
            {(user as UserTypes)?.profile?.phoneNumber}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>
            Email Address
          </span>
          <span className={styles.subsectionContentItemValue}>
            {(user as UserTypes)?.email}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>Bvn</span>
          <span className={styles.subsectionContentItemValue}>
            {(user as UserTypes)?.profile?.bvn}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>Gender</span>
          <span className={styles.subsectionContentItemValue}>
            {(user as UserTypes)?.profile?.gender}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>
            Marital Status
          </span>
          <span className={styles.subsectionContentItemValue}>
            {["single", "married"][Math.floor(Math.random() * 1.99)]}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>Children</span>
          <span className={styles.subsectionContentItemValue}>
            {["none", "1", "2", "2+"][Math.floor(Math.random() * 3.99)]}
          </span>
        </div>

        <div className={styles.subsectionContentItem}>
          <span className={styles.subsectionContentItemLabel}>
            Type of Residence
          </span>
          <span className={styles.subsectionContentItemValue}>
            {
              ["Parent's Apartment", "Personal Apartment"][
                Math.floor(Math.random() * 1.99)
              ]
            }
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default UserInfoSection;
