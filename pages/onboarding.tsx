import Link from "next/link";
import UserData from "../components/organisms/Onboarding/UserData";

const onboarding = () => (
  <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
    <div className="container mx-auto">
      <form action="">
        <div className="form-input d-md-block d-flex flex-column">
          <UserData avatar="true" name="Shayna Anne" email="shayna@anne.com" />
          <div className="pt-50 pb-50">
            <label
              htmlFor="category"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Favorite Game
            </label>
            <select
              id="category"
              name="category"
              className="form-select d-block w-100 rounded-pill text-lg"
              aria-label="Favorite Game"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="fps">First Person Shoter</option>
              <option value="rpg">Role Playing Game</option>
              <option value="arcade">Arcade</option>
              <option value="sport">Sport</option>
            </select>
          </div>

          <div className="button-group d-flex flex-column mx-auto">
            <Link href="/onboarding-finish">
              <a
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
              >
                Create My Account
              </a>
            </Link>

            <Link href="/">
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                role="button"
              >
                Terms & Conditions
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default onboarding;
