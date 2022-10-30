# Generated by Django 4.1.2 on 2022-10-29 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_record_approval_status_record_approver_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='approval_comment',
            field=models.CharField(default=None, max_length=200, null=True, verbose_name='반출 요청 사유'),
        ),
        migrations.AddField(
            model_name='record',
            name='reject_comment',
            field=models.CharField(default=None, max_length=200, null=True, verbose_name='반출 요청 거절 사유'),
        ),
    ]