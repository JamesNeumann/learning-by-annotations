from supertokens_python.recipe import session, emailpassword, dashboard
from supertokens_python import (
    InputAppInfo,
    SupertokensConfig,
)

# this is the location of the SuperTokens core.
supertokens_config = SupertokensConfig(connection_uri="http://supertokens:3567")

app_info = InputAppInfo(
    app_name="Patholearn Authentication",
    api_domain="http://localhost:3001",
    website_domain="http://localhost:3000",
)

framework = "fastapi"

# recipeList contains all the modules that you want to
# use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
recipe_list = [
    emailpassword.init(sign_up_feature=emailpassword.InputSignUpFeature()),
    session.init(),
    dashboard.init(),
]
