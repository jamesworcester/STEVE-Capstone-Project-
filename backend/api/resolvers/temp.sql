
        "INSERT INTO Metric VALUES('$id', '$ctx.args.input.metric_type', '$ctx.args.input.text', '$ctx.args.input.formula', '$ctx.args.input.is_archived', '$ctx.args.input.answer_number', '$ctx.args.input.answer_string')",
        INSERT INTO Metric (id, metric_type, text) VALUES ('$id', '$ctx.args.input.metric_type', '$ctx.args.input.text'),
        SELECT * FROM Metric WHERE id = '$id'