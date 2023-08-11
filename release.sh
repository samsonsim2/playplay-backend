npm install
# echo "Installed my node modules"
#test
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
