module.exports = function(sequelize, DataTypes) {
	var Reply = sequelize.define('Reply', {
	  link: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Reply.belongsTo(models.Question);
			}
		}
	});

	return Reply;
};