from django.db import models
from django.utils.translation import ugettext_lazy as _
from cms.models import CMSPlugin
import re

'''
'''


class SocialMediaConfig(CMSPlugin):

    title = models.CharField(max_length=60,
                             blank=True,
                             null=True)

    def copy_relations(self, old_instance):
        for associated_item in old_instance.associated_item.all():
            associated_item.pk = None
            associated_item.plugin = self
            associated_item.save()

    def __str__(self):
        return "Social Media Links"


'''
'''


class SocialMediaLink(models.Model):

    SOCIAL_FACEBOOK = 'facebook'
    SOCIAL_TWITTER = 'twitter'
    SOCIAL_LINKEDIN = 'linkedin'
    SOCIAL_PINTEREST = 'pinterest'
    SOCIAL_SOUNDCLOUD = 'soundcloud'
    SOCIAL_GOOGLEPLUS = 'google-plus'
    SOCIAL_INSTAGRAM = 'instagram'

    SOCIAL_CHOICES = (
        (SOCIAL_FACEBOOK, "Facebook"),
        (SOCIAL_TWITTER, "Twitter"),
        (SOCIAL_LINKEDIN, "Linkedin"),
        (SOCIAL_PINTEREST, "Pinterest"),
        (SOCIAL_PINTEREST, "Pinterest"),
        (SOCIAL_GOOGLEPLUS, "Google Plus"),
        (SOCIAL_SOUNDCLOUD, "Sound Cloud"),
        (SOCIAL_INSTAGRAM, "Instagram"),
    )

    plugin = models.ForeignKey(SocialMediaConfig, related_name="associated_item")

    link = models.URLField(_('Profile link'),
                           null=False,
                           help_text='The link to your social media profile')

    social_type = models.CharField(max_length=15,
                                   null=False,
                                   choices=SOCIAL_CHOICES)

    def save(self, *args, **kwargs):

        if re.search(r'(https?://)(www.)facebook.com',self.link) is not None:
            self.social_type = self.SOCIAL_FACEBOOK
        elif re.search(r'(https?://)(www.)twitter.com',self.link) is not None:
            self.social_type = self.SOCIAL_TWITTER
        elif re.search(r'(https?://)([a-z]+.)?linkedin.com',self.link) is not None:
            self.social_type = self.SOCIAL_LINKEDIN
        elif re.search(r'(https?://)(www.)pinterest.com',self.link) is not None:
            self.social_type = self.SOCIAL_PINTEREST
        elif re.search(r'(https?://)plus.google.com',self.link) is not None:
            self.social_type = self.SOCIAL_GOOGLEPLUS
        elif re.search(r'(https?://)soundcloud.com',self.link) is not None:
            self.social_type = self.SOCIAL_SOUNDCLOUD
        elif re.search(r'(https?://)instagram.com',self.link) is not None:
            self.social_type = self.SOCIAL_INSTAGRAM
        else:
            raise Exception("Social media not supported.")

        super(SocialMediaLink, self).save(*args, **kwargs)

    def __str__(self):
        return self.link